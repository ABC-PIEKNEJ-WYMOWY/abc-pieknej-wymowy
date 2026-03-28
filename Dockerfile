ARG DEBIAN__DOCKER_IMAGE__TAG__DATE
FROM debian:stable-${DEBIAN__DOCKER_IMAGE__TAG__DATE}-slim AS building
ARG DEBIAN__DOCKER_IMAGE__TAG__DATE
USER root
RUN useradd -m -s /bin/bash builder
RUN mkdir /home/builder/abc-pieknej-wymowy
RUN chown builder:builder /home/builder/abc-pieknej-wymowy
RUN apt-get update && apt-get install -y --no-install-recommends curl xz-utils ca-certificates
ARG NODE_JS__VERSION
ENV NODE_JS__VERSION=${NODE_JS__VERSION}
RUN curl -fsSL https://nodejs.org/dist/v${NODE_JS__VERSION}/node-v${NODE_JS__VERSION}-linux-x64.tar.xz -o /tmp/node.tar.xz
RUN tar -xJf /tmp/node.tar.xz -C /tmp
RUN cp -r /tmp/node-v${NODE_JS__VERSION}-linux-x64/* /usr/local/
RUN rm -rf /tmp/node.tar.xz /tmp/node-v${NODE_JS__VERSION}-linux-x64
WORKDIR /home/builder/abc-pieknej-wymowy
USER builder
COPY --chown=builder:builder . .
RUN npm clean-install
ENV NODE_OPTIONS="--import=./hook-for-loading-TypeScript/entrypoint-of-hook-for-loading-TypeScript.ts"
ENV ADAPTER__NAME="Node"
RUN npm run build
ARG DEBIAN__DOCKER_IMAGE__TAG__DATE
FROM debian:stable-${DEBIAN__DOCKER_IMAGE__TAG__DATE}-slim AS running
ARG DEBIAN__DOCKER_IMAGE__TAG__DATE
USER root
RUN useradd -m -s /bin/bash runner
RUN mkdir /home/runner/abc-pieknej-wymowy
RUN chown runner:runner /home/runner/abc-pieknej-wymowy
RUN apt-get update && apt-get install -y --no-install-recommends curl xz-utils ca-certificates
ARG NODE_JS__VERSION
ENV NODE_JS__VERSION=${NODE_JS__VERSION}
RUN curl -fsSL https://nodejs.org/dist/v${NODE_JS__VERSION}/node-v${NODE_JS__VERSION}-linux-x64.tar.xz -o /tmp/node.tar.xz
RUN tar -xJf /tmp/node.tar.xz -C /tmp
RUN cp -r /tmp/node-v${NODE_JS__VERSION}-linux-x64/* /usr/local/
RUN rm -rf /tmp/node.tar.xz /tmp/node-v${NODE_JS__VERSION}-linux-x64
WORKDIR /home/runner/abc-pieknej-wymowy
COPY --chown=runner:runner --from=building /home/builder/abc-pieknej-wymowy/build ./build
COPY --chown=runner:runner --from=building /home/builder/abc-pieknej-wymowy/hook-for-loading-TypeScript ./hook-for-loading-TypeScript
COPY --chown=runner:runner --from=building /home/builder/abc-pieknej-wymowy/package-lock.json ./package-lock.json
COPY --chown=runner:runner --from=building /home/builder/abc-pieknej-wymowy/package.json ./package.json
RUN npm clean-install --omit=dev
USER runner
ENV NODE_OPTIONS="--import=./hook-for-loading-TypeScript/entrypoint-of-hook-for-loading-TypeScript.ts"
ENV ADAPTER__NAME="Node"
ENTRYPOINT ["npm", "run", "start:build"]

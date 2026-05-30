FROM alpine:3.20

RUN apk add --no-cache unzip curl ca-certificates

ARG PB_VERSION=0.39.0

RUN curl -fsSL https://github.com/pocketbase/pocketbase/releases/download/v${PB_VERSION}/pocketbase_${PB_VERSION}_linux_amd64.zip \
    -o /tmp/pb.zip && \
    unzip /tmp/pb.zip pocketbase -d /pb && \
    rm /tmp/pb.zip

COPY pb_migrations /pb/pb_migrations

EXPOSE 8090

CMD ["/pb/pocketbase", "serve", "--http=0.0.0.0:8090", "--dir=/pb"]

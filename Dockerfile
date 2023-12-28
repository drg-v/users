FROM golang:1.21.5-alpine3.18 as builder
WORKDIR /docker
COPY backend/go.* ./
COPY backend .
RUN go mod download
RUN go build -o back cmd/main.go

FROM alpine:3.18
WORKDIR /docker
COPY --from=builder /docker/back .
COPY /backend/config/config.yml /docker/config/config.yml
CMD ["./back"]

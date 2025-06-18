FROM debian:bookworm

RUN apt-get update && apt-get install -y \
    curl git sudo zsh \
    && rm -rf /var/lib/apt/lists/*

RUN groupadd -g 1000 delnegend && \
    useradd -m -u 1000 -g delnegend delnegend && \
    echo "delnegend ALL=(ALL) NOPASSWD: ALL" > /etc/sudoers.d/delnegend && \
    mkdir -p /home/delnegend/.pnpm-store && chown -R delnegend /home/delnegend/.pnpm-store

USER delnegend
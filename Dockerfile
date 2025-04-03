FROM artifactory.aexp.com/paas-registry/buildpacks/rhel-nodejs-20-builder:20.x.latest


# Add a runtime user account, to avoid running as "root", note this is rather superluous as the ECP wrapper runs as a completely different user
# We use /app/certs for our certificate write area
USER root

RUN useradd --system paasuser --uid 1001 --shell /sbin/nologin

RUN mkdir -p /opt/app-root/ && \
    chown paasuser:paasuser /opt/app-root && \
    mkdir -p /app/certs && \
    chown paasuser:paasuser /app/certs && \
    chmod 777 /app/certs

# Always execute from within the "/opt/app-root" folder by default
WORKDIR /opt/app-root

COPY . . 

COPY .env .

RUN npm install

RUN chmod -R 777 /opt/app-root/*

USER paasuser

EXPOSE 3000

ENTRYPOINT npm start
# Keycloak no auth extension
Inside `no-auth-jar` directory run:
```bash
jar cvf NoAuth.jar .
```

Then copy the generated jar into your keycloak installation. For example, if you are using docker, you can run the following command to copy the jar into the keycloak container:
```bash
docker ./no-auth-jar/NoAuth.jar keycloak:/opt/keycloak/providers/NoAuth.jar
```
Restart keycloak and you should be able to use the no auth provider.
More complete instructions can be found in the [keycloak documentation](https://www.keycloak.org/docs/latest/server_development/index.html#_providers).

FROM maven:3.9.2-eclipse-temurin-20

WORKDIR /app
COPY . /app
EXPOSE 8080

ENTRYPOINT ["mvn", "spring-boot:run"]
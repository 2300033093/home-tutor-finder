FROM openjdk:21-jdk-slim
WORKDIR /app
COPY mvnw .
COPY .mvn .mvn
COPY pom.xml .
COPY src ./src
RUN ./mvnw dependency:go-offline -B

EXPOSE 8085
CMD ["./mvnw", "spring-boot:run"]

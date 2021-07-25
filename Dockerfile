FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build-env
LABEL stage=build-env
WORKDIR /app

# Copy and build
COPY . /app
RUN dotnet publish /app/src/OrchardCore.Community -c Release -o ./build/release 

# Build runtime image
FROM mcr.microsoft.com/dotnet/aspnet:5.0
EXPOSE 80
ENV ASPNETCORE_URLS http://+:80
WORKDIR /app
COPY --from=build-env /app/build/release .

ENTRYPOINT ["dotnet", "OrchardCore.Community.dll"]
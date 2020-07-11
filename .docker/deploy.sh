# Traemos los cambios del repositorio
git pull origin master
# Traemos la ultima
echo tfAHaoxguorGQD4RtPk4 | cat | docker login registry.gitlab.com --username acalvoa --password-stdin
docker pull registry.gitlab.com/acalvoa/devops-test
# Hacemos deploy de la imagen
cd /home/jenkins/devops-test/devops/.docker
docker stack deploy -c docker.swarm.yml angular --with-registry-auth

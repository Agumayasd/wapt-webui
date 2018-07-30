
# WAPT-webui

WAPT-webui est une console, développé en VueJS, dédié à l'administration de [WAPT](https://github.com/tranquilit/WAPT) .

Nous adorons WAPT mais pour nous la console actuelle comporte certains inconvénients :
* requiert un PC sous Windows
* requiert l'installation de la console sur tous les postes des administrateurs
* difficile de centraliser la console

Nous sommes deux administrateurs systèmes Linux/GNU donc...nous souhaitions pouvoir nous affranchir de la dépendance à Windows pour administrer WAPT.

WAPT-webui est entièrement développé en [VueJS](https://vuejs.org/) et utilise l'API REST proposé par WAPT (comme le fait la console actuelle).

# Fonctionnalités

## Tableau de bord

- Le tableau de bord est une vue qui permet d'un seul coup d'oeil de consulter plusieurs informations.

  - La répartition du status des postes (OK,CRITICAL,TO-UPDATE).
  - La répartition des différents systèmes d'exploitation du parc géré par WAPT.
  - Des tableaux avec les 5 derniers postes qui ont joints le serveur WAPT suivant leurs status (ERROR,OK,TO-UPDATE).

 - Inventaire des hôtes : état des paquets, informations sur les paquets à mettre à jours, en erreurs.

# Etat du développement

Nous sommes actuellement dans une version de développement.
Vous ne retrouverez pas l'ensemble des fonctionnalités proposées par la console WAPT officielle.

Gardez à l'esprit que des changements importants (UI, techniques...) peuvent subvenir jusqu'à la sortie d'une version 1.0.

# Compatibilité
WAPT-webui est compatible avec Google Chrome et Firefox. Nous n'avons pas effectué de tests avec Internet Explorer donc n'hésitez pas à ouvrir une issue en cas de problème.

# Installation

Télécharger la dernière version du projet 

```shell
# Créer un dossier pour le virtualhost
mkdir -m 0700 /var/www/wapt-webui
chown www-data: /var/www/wapt-webui

# Télécharger la dernière version du projet
wget -O /var/www/wapt-webui/wapt-webui.tar.gz ....

# Décompresser l'archive
cd /var/www/wapt-webui
tar xzf wapt-webui.tar.gz && rm -f wapt-webui.tar.gz

# Permissions
cd /var/www/wapt-webui
chown -R www-data: /var/www/wapt-webui
find . -type f -exec chmod 0400 {} \;
find . -type d -exec chmod 0500 {} \;
```

# Configuration

## URL serveur WAPT
Pour spécifier le serveur WAPT à utiliser il faut modifier le fichier **index.js** comme ci-dessous  (**attention à bien spécifier le / à la fin de l'URL**) :

``` shell
URL="https://wapt.mydomain.com/"
sed -i "s#WAPT_SERVER_URL#$URL#g" /var/www/wapt-webui/static/js/app.*.js
```

## NGINX / Apache2

### CORS

### Basic Auth
Il est nécessaire de désactiver l'en-tête HTTP  **WWW-Authenticate** pour éviter que les navigateurs affiche une fenêtre d'authentification basique. Cette solution n'est pas conforme avec les standards w3  (401 Unauthorized) mais pour le moment nous n'en avons pas d'autres.

### NGINX
Pour NGINX il est nécessaire d'ajouter cette ligne dans la configuration du virtualhost :

```
proxy_hide_header 'WWW-Authenticate';
```
# Contact
Vous pouvez nous contacter par mails: tim@clerc.im ou valentin@baraise.fr

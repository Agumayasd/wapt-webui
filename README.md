<p align="center"><a href="https://github.com/Agumayasd/wapt-webui" target="_blank" rel="noopener noreferrer"><img width="100" src="https://i.imgur.com/nCB07AG.png" alt="wapt-webui logo"></a></p>

<h1 align="center">WAPT-webui</h1>

# Introduction

WAPT-webui est une console développée en VueJS pour administrer  [WAPT](https://github.com/tranquilit/WAPT) .

Nous utilisons quotidiennement WAPT mais pour nous la console actuelle comporte certains inconvénients :
* requiert un PC sous Windows
* requiert l'installation de la console sur tous les postes des administrateurs et donc...
* difficile de centraliser la console

Nous sommes deux administrateurs système Linux/GNU et nous souhaitions pouvoir nous affranchir de la dépendance à Windows pour administrer WAPT.

WAPT-webui est entièrement développé en [VueJS](https://vuejs.org/) et utilise l'API REST proposé par WAPT (comme le fait la console actuelle).

# Fonctionnalités

## Tableau de bord

- Le tableau de bord est une vue qui permet d'un seul coup d'oeil de consulter plusieurs informations.

  - La répartition des postes par statut (OK,CRITICAL,TO-UPDATE).
  - La répartition des différents systèmes d'exploitation du parc géré par WAPT.
  - Des tableaux avec les 5 derniers postes qui ont joint le serveur WAPT suivant leur statut (ERROR,OK,TO-UPDATE).

## Inventaire
 - Inventaire des postes : état des paquets, informations sur les paquets à mettre à jour ou en erreur, états des postes...

# État du développement

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
wget -O /var/www/wapt-webui/wapt-webui.tar.gz https://github.com/Agumayasd/wapt-webui/releases/download/0.1.0/wapt-webui-0.1.0.tar.gz

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
Pour spécifier le serveur WAPT à utiliser il faut modifier le fichier **app.js** comme ci-dessous  (**attention à ne spécifier que le domaine**) :

``` shell
URL="https://wapt.mydomain.com"
sed -i "s#WAPT_SERVER_URL#$URL#g" /var/www/wapt-webui/static/js/app.*.js
```

## NGINX / Apache2

### Configuration
Il faut modifier la configuration de votre virtualhost (Apache2 ou Nginx) pour permettre l'utilisation de l'API Wapt par Javascript. Voir les sections **CORS** et **Basic-auth** ci-dessous.

### CORS

#### NGINX

```
    # CORS wapt-webui
    add_header 'Access-Control-Allow-Origin' "$http_origin" always;
    add_header 'Access-Control-Allow-Credentials' 'true' always;
    add_header 'Access-Control-Allow-Methods' 'GET, POST, PUT, DELETE, OPTIONS' always;
    add_header 'Access-Control-Allow-Headers' 'Accept,Authorization,Cache-Control,Content-Type,DNT,If-Modified-Since,Keep-Alive,Origin,User-Agent,X-Requested-With' always;
    # required to be able to read Authorization header in frontend
    add_header 'Access-Control-Expose-Headers' 'Authorization, Authentication' always;
    
    # Disable WWW-Authenticate for wapt-webui
    proxy_hide_header 'WWW-Authenticate';
```

#### Apache2
Nous n'avons pas fait de test sur apache2 donc si vous rencontrez des problèmes vous pouvez ouvrir une issue.

Si vous avez une configuration fonctionnelle: vous pouvez contribuer :)

### Basic Auth
Il est nécessaire de désactiver l'en-tête HTTP  **WWW-Authenticate** pour éviter que les navigateurs affichent une fenêtre d'authentification basique. Cette solution n'est pas conforme avec les standards W3  (401 Unauthorized) mais pour le moment nous n'en avons pas d'autres.

#### NGINX
Pour NGINX il est nécessaire d'ajouter cette ligne dans la configuration du virtualhost :

```
proxy_hide_header 'WWW-Authenticate';
```

#### Apache2
Nous n'avons pas fait de test sur apache2 donc si vous rencontrez des problèmes vous pouvez ouvrir une issue.

Si vous avez une configuration fonctionnelle: vous pouvez contribuer :)

# Questions
N'hésitez pas à ouvrir des issues pour poser des questions.

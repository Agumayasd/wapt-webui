# WAPT-webui

WAPT-webui est une console, développé en VueJS, dédié à l'administration de [WAPT](https://github.com/tranquilit/WAPT) .

Nous adorons WAPT mais pour nous la console actuelle comporte certains inconvénients :
* requiert un PC sous Windows
* requiert l'installation de la console sur tous les postes des administrateurs
* difficile de centraliser la console

Nous sommes deux administrateurs systèmes Linux/GNU donc...nous souhaitions pouvoir nous affranchir de la dépendance à Windows pour administrer WAPT.

WAPT-webui est entièrement développé en [VueJS](https://vuejs.org/) et utilise l"API REST proposé par WAPT (comme le fait la console actuelle).

# Fonctionnalités

## Tableau de bord

 Le tableau de bord est une vue qui permet d'un seul coup d'oeil de consulter plusieurs informations.

- La répartition du status des postes (OK,CRITICAL,TO-UPDATE)
- La répartition des différents système d'exploitation du parc géré par WAPT.
- Des tableaux avec les 5 derniers postes qui ont joints le serveur WAPT suivant leurs status. (ERROR,OK,TO-UPDATE)

 - Inventaire des hôtes : état des paquets, informations sur les paquets à mettre à jours, en erreurs.

# Etat du développement

Nous sommes actuellement dans une version de développement.
Vous ne retrouverez pas l'ensemble des fonctionnalités proposées par la console WAPT officielle.

Gardez à l'esprit que des changements importants (UI, techniques...) peuvent subvenir jusqu'à la sortie d'une version 1.0.

# Compatibilité
WAPT-webui est compatible avec Google Chrome ainsi que Firefox. Nous n'avons pas effectué de tests avec Internet Explorer donc n'hésitez pas à nous informer de possibles problèmes.

# Installation

# Configuration

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

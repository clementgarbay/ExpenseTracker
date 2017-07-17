# Documentation / Mise en route rapide

## Api

Déployer l'[API](https://github.com/clementgarbay/ExpenseTracker-API) associé avec votre configuration.

Ou alors, l'API est déjà disponible (avec mon compte pré-configuré) ici : [https://expense-tracker-api-gcnmcmtirw.now.sh](https://expense-tracker-api-gcnmcmtirw.now.sh).

EMAIL: Demandez moi

## Google

- Créer un document Google Spreadsheets (où seront stockées les dépenses) et le partager avec l'adresse email EMAIL.
- Partagez également le dossier Google Drive dans lequel vous voulez placer les images avec l'adresse email EMAIL. 
- Copier l'id du Google Spreadsheets et du dossier Google Drive (vous pouvez les trouver dans l'URL) et les renseigner dans le fichier `google.json` du dossier `config`.

Pour chaque nouvelle dépense, l'API ajoute une nouvelle ligne au document avec les informations suivantes (correspondant à chaque colonne): `type, recipient, description, amount, currency, date, proof`.

Pour démarrer l'appli sur le device voir la [doc](https://facebook.github.io/react-native/docs/running-on-device.html) React Native.


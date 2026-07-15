# Discord Rich Presence Customizer

A simple, lightweight Node.js script to display a custom Discord Rich Presence on your profile!

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/vijaysingh2219/Discord-RPC.git
cd Discord-RPC
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure your Client ID

- Copy the `.env.example` file and rename it to `.env`.
- Replace the placeholder text with your actual Discord Application Client ID.

```env
CLIENT_ID=your_client_id_here
```

*(You can find or create a Client ID on the [Discord Developer Portal](https://discord.com/developers/applications)).*

### 4. Customize your status

Open `config.json` and edit it to display whatever you want!

```json
{
  "details": "One Piece",
  "state": "The Legend Lurking in Elbaph - The Identity of the Mountain-Eater • Episode 1,169",
  "largeImageKey": "luffy",
  "largeImageText": "Gear 5",
  "smallImageKey": "strawhat",
  "smallImageText": "Straw Hat Pirates",
  "buttons": [
    {
      "label": "Watch Anime",
      "url": "https://www.crunchyroll.com/series/GRMG8Z376/one-piece"
    },
    {
      "label": "Read Manga",
      "url": "https://mangaplus.shueisha.co.jp/titles/100020"
    }
  ]
}
```

*(Note: Image keys must perfectly match the assets uploaded to your Discord Developer Application).*

## Running the App

Once everything is configured, start the script:

```bash
npm start
```

Make sure your Discord Desktop app is open in the background!

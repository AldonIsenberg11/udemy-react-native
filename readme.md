
## Testing on actual Phone (Android & IOs)

1. Download [Expo Go](https://expo.dev/) from the app store on phone (android & IOS)
2. Run `npm run start` in the terminal to spin up a new session
    - Should create a QR code:
    - ![qr-example](https://user-images.githubusercontent.com/23458977/233207527-3e7b3f9e-99c1-491e-b93d-3fd4220b523e.png)
3. Scan QR code, now any local changes made to code will show up (hot-reloaded) on phone.

---

## Local Development for emulators

### iOS

Finder -> left panel go to `Applications` -> right click on Xcode and click show contents -> Contents/Developer/Applications/Simulator.app

Example:
>![simulator-example](https://user-images.githubusercontent.com/23458977/233231102-006384cd-2641-4da1-969d-a787217afc17.png)

### Android

Open Android Studio, Go to Virtual Device Manager:
>![android-example](https://user-images.githubusercontent.com/23458977/233778410-3a562aed-b72e-40da-adff-63281f1bd208.png)

Hit Play
>![android-example-2](https://user-images.githubusercontent.com/23458977/233778486-045e69e8-2d35-4a63-9e0c-f23983a5f5a9.png)
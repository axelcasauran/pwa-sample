/// <reference types="web-bluetooth" />

// Extend Navigator for Web Bluetooth API
interface Navigator {
  bluetooth: Bluetooth;
}

/**
 * Deskripsi:
 * contoh fungsi otomatis dengan interval waktu yang dapat di customize
 */

import * as functions from "firebase-functions";

export const scheduler = functions.pubsub
  .schedule("*/10 * * * *")
  .onRun((() => {
    console.log("scheduler function");
    return null;
  }));

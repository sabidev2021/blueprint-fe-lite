/**
 * Deskripsi:
 * Dijalankan setelah dokumen dibuat, dibaca, diperbaharui, atau dihapus
 */

import * as functions from "firebase-functions";

export const createUser = functions.firestore
  .document("members/{userId}")
  .onCreate((snap, context) => {
    console.log(
      "trigger after create",
      snap.data(),
      context
    );
  });

export const getUser = functions.firestore
  .document("members/{userId}")
  .onWrite((change, context) => {
    console.log(
      "trigger after read",
      change.after.data(),
      change.before.data(),
      context
    );
  });

export const updateUser = functions.firestore
  .document("members/{userId}")
  .onUpdate((change, context) => {
    console.log(
      "trigger after update",
      change.after.data(),
      change.before.data(),
      context
    );
  });

export const deleteUser = functions.firestore
  .document("members/{userId}")
  .onDelete((snap, context) => {
    console.log(
      "trigger after delete",
      snap.data(),
      context
    );
  });

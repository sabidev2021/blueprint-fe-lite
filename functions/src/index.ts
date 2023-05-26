/**
 * Cara deploy function ke cloud firebase:
 * run npm install
 * run 'firebase login'
 * run firebase init (optional)
 * run firebase deploy --only functions
 */

import {scheduler} from "./scheduler";
import {createUser, deleteUser, getUser, updateUser} from "./callback/callback";

export {
  scheduler,
  createUser,
  getUser,
  updateUser,
  deleteUser,
};



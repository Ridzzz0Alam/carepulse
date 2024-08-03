import * as sdk from "node-appwrite";

export const {
  PROJECT_ID,
  API_KEY,
  DATABASE_ID,
  PATIENT_COLLECTION_ID,
  DOCTOR_COLLECTION_ID,
  APPOINTMENT_COLLECTION_ID,
  NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
  NEXT_PUBLIC_ENDPOINT: ENDPOINT,
} = process.env;

const client = new sdk.Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("66a75221001807a4721e")
  .setKey(
    "d5355e9c50db21433fa6f6de2db0936e9e48c00d87581421b5d5db72aebb695bb3a95936b1984f4fdb456f12d4a9a534d7a003bfef018595426027320de9722091e2554360475f3a1521842dd83fc6996bec9ff40a42f27523fcca21e7580b82c3bb74e8be3047262d1571835676787e6729887bf72102dd96f5f073f7ecc955"
  );

export const databases = new sdk.Databases(client);
export const users = new sdk.Users(client);
export const messaging = new sdk.Messaging(client);
export const storage = new sdk.Storage(client);

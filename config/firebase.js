const admin = require("firebase-admin");
if (!admin.apps.length) {
  const decodedServiceAccount = JSON.parse(
    Buffer.from(
      "ewogICJ0eXBlIjogInNlcnZpY2VfYWNjb3VudCIsCiAgInByb2plY3RfaWQiOiAid2F0ZXItY2FuLWIzMWY4IiwKICAicHJpdmF0ZV9rZXlfaWQiOiAiNDBjYzA4MTk3ZjZhMDRmM2U0NGQ2MGUxNmFiYjQxNjNkNTBkNTlkZCIsCiAgInByaXZhdGVfa2V5IjogIi0tLS0tQkVHSU4gUFJJVkFURSBLRVktLS0tLVxuTUlJRXZRSUJBREFOQmdrcWhraUc5dzBCQVFFRkFBU0NCS2N3Z2dTakFnRUFBb0lCQVFDODRiaC9RWER5RWlteFxuMmd0dTRmMTljRVprelI0T0VXNTFBelJXZXZucXJPMWErU2ZrTUEvejU2MUEyY2VRclkwMWY3NkVoUUNmaEFSSFxuaXZPSkxkdHVwamtvQ0JDOEYrZTNWTGgva1VDY0RsZ0hRRU1iTzBWOFdIQUxvWXk1K1BEeDdsQm54ODZCR3RNQlxuY25PaE1aS0RXdXVlcEcrQ3FKUjdLcGVTV2Y5eVEzT1NrTnowaUtDMDhDeTk0M1MxNldqelpNc3g4ZGdyZUhSc1xuRXZEZkQ4K2U3MldOcHNTOWY3eEhCZ2JmM2kydUN1bitYVzdCcTdacm90alY5dHZmK2NQUmJBU29MVEJoalFyQVxuc1Z1S0lXLzQwTFc2Vk5jeGt4NjNKNWdHWEdCdFhpYVpVamtCd0N0ZTVWazV1bE9NdW9ENlhmek9MTUdUQzFvUFxuQ1U5enlKTkJBZ01CQUFFQ2dnRUFYaXBtVWNNdGJQSFRLYURjTEZhc2l2b0xqanVZclVqUmViSzBTQjBkTlhzclxuQmp6TFAzOGFwTzJ1dVhNWmhDNlNCTWNBRTQ4L1pVZHEzc1FPY0NpVmlrK0NsVXVZRkQ0U3ZwcVZOTHdVcXZpWFxudUYyNFZ2NHd3VEpTQWVwemYwLzF4NWVaTEhRM3ByUFoySkhYeGRneUJCeXk5Uzlqakk5Qkh6cDN3SFh2M1dXWVxuZ01BRnI1cDFIbXlpRUVxdU5BejE5NGY3Q0lXUGxSUWp0RitpU01GYWxXcm1mUW95clBtMCtrOGVkS21SMWtmUVxuNW5EY2tDeVhTNm9EQ0RZNW1IK092MDdpTERXNHZkTkFkTmVHbHUwUW5EcnAvUGNLOVdpRVJUaWcyTC9XUnpKQ1xuVXhmbkJxSkJ4eXpXYlk1R3pPOTJtajZyMTdXNEM3RDkvWHZHSDlOd1ZRS0JnUUQ0R1E3Y291WGc5RjNsTUx5SVxuWXNwV1REWWhxc1J5TnorNEhlUm53c1NWbmhrZlN1VTBDOXBacU1lNVlENXR4TytyaDRFOW1pM3hkdEpEVGtDOFxuUk1pUnpKUmVmUHFEdkpUcllVR2l6Sm5MTzhwcW9RbEdYdGRCdlA5b3dleUsrNHptZTBjaUFCbkprOVRRQTJUSFxuR0RCNTM0dzFrcXZKQVFSK1gybjNxUXlLSXdLQmdRREM1ZE5YMFZNN1NuOGtYekZURGVkZlJ4RnV0SVBiNm40U1xuTXVlZEtHVHVaeTlFZjVGVGRkbzk4UDJGNCtvaUhrdHAyb3lvSGJZejVxVjBJSGo4bmNiT2tVeWlCL0MzeWlXNlxucUgvNzhvR25PRWE0ZXJmUFVEWUtURkZkc2lQakJkUUhJd3hadEJRK2dnTVdCZzVPM21nUzFCcS9Oc3BaaFNrN1xuMWdoU2ZabXBTd0tCZ1FDV3UxcXRNQWNzTWl0dDJMdGl2V3FqSGJCeHFmZXFVT2pVcXN5ZlFkVC85Y3JibVR4QlxuNzhXY1hZL2lqNWUrUnowNTRKemoyVzE2VzYrSmx0eDd4ZXA1c21xZU1aNWVOVS9nNWZqanVSempQaE5QejBEOFxuVVJqRTV0ZmlSSmU3SlBQSkFETUtkRGMyb2l0VXFnc3Jid1hjdGJYUXdxaTkrWEZLZWh1K2pTV0NNd0tCZ0ZUT1xuTm9FKzUyMmtRK0NxdjBhNWhSVVRVb1dPYk5Yem1qb0hCbnQvQ1RRbm1BekJTWlk4Y09PRkNud0pLV2NCTWFWMFxuNE1HQ2REYnZSTTFjRitrc0trYldPTGRFcHowQjdCcmxtUk1qZWNFdW5xOUZUdGdadWZvUExWU000RXEzellQeFxuZnoxRk80M2Jlc1pKaWs1TlBwSDYwMHlpNWJmQVZxbmZ2eTFOMCtBekFvR0FLUkc1Q1BidjFJZitnS1Z4TmFjQ1xuMldJWXVEdy92bmMzeEUyU2lLcERGTmcxNWlTMDBUdnZjU05GTVY5cDcyWnp2bWVIaVozOHZiMWhDYTFFVVpFbVxuWUJRLzVCNE5USVFQK1YwYkpFK25lOW1YZ050MnV1alhhSVlDR3ZlTXBzdkhzazVsOUoxaUVNQXFJcm1NL0YvOFxubklZNWFKN1hFRVZsOWxZemRyazhVZXc9XG4tLS0tLUVORCBQUklWQVRFIEtFWS0tLS0tXG4iLAogICJjbGllbnRfZW1haWwiOiAiZmlyZWJhc2UtYWRtaW5zZGstZmJzdmNAd2F0ZXItY2FuLWIzMWY4LmlhbS5nc2VydmljZWFjY291bnQuY29tIiwKICAiY2xpZW50X2lkIjogIjEwNDIxMzA5MzAzOTg5NDY2ODU4MCIsCiAgImF1dGhfdXJpIjogImh0dHBzOi8vYWNjb3VudHMuZ29vZ2xlLmNvbS9vL29hdXRoMi9hdXRoIiwKICAidG9rZW5fdXJpIjogImh0dHBzOi8vb2F1dGgyLmdvb2dsZWFwaXMuY29tL3Rva2VuIiwKICAiYXV0aF9wcm92aWRlcl94NTA5X2NlcnRfdXJsIjogImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL29hdXRoMi92MS9jZXJ0cyIsCiAgImNsaWVudF94NTA5X2NlcnRfdXJsIjogImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3JvYm90L3YxL21ldGFkYXRhL3g1MDkvZmlyZWJhc2UtYWRtaW5zZGstZmJzdmMlNDB3YXRlci1jYW4tYjMxZjguaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLAogICJ1bml2ZXJzZV9kb21haW4iOiAiZ29vZ2xlYXBpcy5jb20iCn0=",
      "base64"
    ).toString("utf8")
  );

  admin.initializeApp({
    credential: admin.credential.cert(decodedServiceAccount),
    storageBucket: "water-can-b31f8.firebasestorage.app",
    projectId: "water-can-b31f8",
  });
}

const storage = admin.storage().bucket();

module.exports = {
  admin,
  storage,
};
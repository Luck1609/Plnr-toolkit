export const submitApplication = (data) => {
  console.log("submit application data", data)
  const { epa_cert, fire_cert, use, existing, ...info } = data;

  const payload = new FormData();

  Object.entries(info).forEach(([key, value]) => {
    payload.append(key, value);
  });

  payload.append("use[]", use)
  payload.append("existing", existing ? 1 : 0)
  
  if (epa_cert) payload.append("scanned_documents[epa]", epa_cert[0]);
  if (fire_cert) payload.append("scanned_documents[fire]", fire_cert[0]);


  console.log("form data payload", payload)

  return payload;
};
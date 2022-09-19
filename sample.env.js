const production = {
    ...process.env,
    NODE_ENV: process.env.NODE_ENV || 'production',
};

const development = {
    ...process.env,
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: '9000',
    Meta_WA_VerifyToken: 'ThisIdDipuVefiTokenDHHAHA',  //Any Custom
    Meta_WA_accessToken: 'EAAHGZA6T1f44BAJfX6ZAZChIYgghoIoBQjCh6BiZCWqm4TAlVprVJ137i9GSRZCXCEi87v73SwTCwiuFe5BUrfSrnOAZCYmMUzCK5KWWtYzDiUwouY5MTWb3ZAfEDZAzfJ80pR8Eg281k87yZCllZBKZBZAsnOEAnpzdG467Wo6BHsYnyj7CQIXgGfLsbA06MfzxSLiZCkbmKbjqD9QZDZD',
    Meta_WA_SenderPhoneNumberId: '102015186006727',
    Meta_WA_wabaId: '104784479059323',  //WhatsApp Business Account ID
};

const fallback = {
    ...process.env,
    NODE_ENV: undefined,
};

module.exports = (environment) => {
    console.log(`Execution environment selected is: "${environment}"`);
    if (environment === 'production') {
        return production;
    } else if (environment === 'development') {
        return development;
    } else {
        return fallback;
    }
};

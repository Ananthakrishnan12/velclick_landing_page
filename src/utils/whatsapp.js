export const WHATSAPP_NUMBER = '916379553564';

export const DEFAULT_WHATSAPP_MESSAGE =
  'Hi VelClick Agency, I am interested in your digital marketing services. Please share more details.';

export const getWhatsAppUrl = (message = DEFAULT_WHATSAPP_MESSAGE) => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};


export interface ContactsProps {
  data: {
    title?: string;
    email: string;
    telegram: TelegramProps;
  };
}

interface TelegramProps {
  title: string;
  url: string;
}

import { FC, ComponentType } from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';

import { LayoutProps } from './Layout.props';

export const Layout: FC<LayoutProps> = ({
  children,
  ...props
}: LayoutProps) => {
  return (
    <div className="flex h-full min-h-screen flex-col bg-slate-50" {...props}>
      <Header />

      <main className="flex-grow pt-[60px] md:pt-[100px]">{children}</main>

      <Footer />
    </div>
  );
};

export const withLayout = (Component: ComponentType<any>) => {
  return function withLayoutComponent(props: any) {
    return (
      <Layout {...props}>
        <Component {...props} />
      </Layout>
    );
  };
};

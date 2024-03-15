import Header from '@/widgets/header';

const NavigationProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <div style={{ paddingLeft: 10, paddingRight: 10 }}>{children}</div>
    </>
  );
};

export default NavigationProvider;

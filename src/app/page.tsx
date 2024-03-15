import styles from './page.module.scss';
import HomeForm from '@/widgets/homel-form';
import FlexContainer, {
  FlexAlignItems,
  FlexJustifyContent,
} from '@/shared/assets/tempus-ui/components/flex-container/flex-container';

export type RegisterName = 'designation' | 'specification' | 'loginEvent';
export interface InputPlaceholder {
  placeholder: string;
  registerName: RegisterName;
  id: number;
}

const createEventInputPlaceholder: InputPlaceholder[] = [
  {
    placeholder: 'название',
    registerName: 'designation',
    id: 1,
  },
  {
    placeholder: 'описание',
    registerName: 'specification',
    id: 2,
  },
];

const loginEventInputPlaceholder: InputPlaceholder[] = [
  {
    placeholder: 'код мероприятия',
    registerName: 'loginEvent',
    id: 1,
  },
];

export default function Home() {
  return (
    <>
      <FlexContainer
        justifyContent={FlexJustifyContent.CENTER}
        alignItems={FlexAlignItems.CENTER}
        className={styles.container}
      >
        <FlexContainer justifyContent={FlexJustifyContent.SPACE_AROUND} className={styles.homeFormContainer}>
          <HomeForm placeholders={createEventInputPlaceholder} title={'Cоздать мероприятие'} />
          <HomeForm placeholders={loginEventInputPlaceholder} title={'Войти на мероприятие'} />
        </FlexContainer>
      </FlexContainer>
    </>
  );
}

/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import {
  FC,
  ReactNode,
  createContext,
  useState,
  useMemo,
  useCallback,
  useContext,
  cloneElement,
} from 'react';
import { HiXMark } from 'react-icons/hi2';
import { createPortal } from 'react-dom';
import useOutsideClick from '../../hooks/useOutsideClick';
import Overlay from './Overlay';
import ModalWindow from './ModalWindow';
import { CloseButton } from '../Button';

interface ModalContextType {
  openName?: string;
  close: () => void;
  open?: React.Dispatch<React.SetStateAction<string>>;
  setOpenId?: React.Dispatch<React.SetStateAction<string>>;
  openId?: string;
  setOpenPage?: React.Dispatch<React.SetStateAction<number>>;
  page?: number;
}

const ModalContext = createContext<ModalContextType>({
  close: () => {},
});

interface OpenProps {
  children: ReactNode;
  opens: string;
  openId?: string;
  page?: number;
}

const Open: FC<OpenProps> = ({ children, opens: opensWindowName, openId, page }) => {
  const { open, setOpenId, setOpenPage } = useContext(ModalContext);

  return (
    <div
      onClick={() => {
        if (openId) {
          setOpenId?.(openId);
        }
        if(page) {
          setOpenPage?.(page)
        }
        open?.(opensWindowName);
        
      }}
      className="self-end"
    >
      {children}
    </div>
  );
};

interface WindowProps {
  children: ReactNode;
  name: string;
}

const Window: FC<WindowProps> = ({ children, name }) => {
  const { openName, close, openId } = useContext(ModalContext);
  const ref = useOutsideClick(close);
  if (name !== openName) return null;

  return createPortal(
    <Overlay>
      <ModalWindow reference={ref}>
        <CloseButton onClick={close}>
          <HiXMark />
        </CloseButton>
        <div>
          {cloneElement(children as React.ReactElement, {
            onCloseModal: close,
            openId,
          })}
        </div>
      </ModalWindow>
    </Overlay>,
    document.body,
  );
};

interface ModalProps {
  children: ReactNode;
}

interface ModalComposition {
  Open: typeof Open;
  Window: typeof Window;
}

const Modal: FC<ModalProps> & ModalComposition = ({ children }: ModalProps) => {
  const [openName, setOpenName] = useState<string>('');
  const [openId, setOpenId] = useState<string>('');
  const [page, setOpenPage] = useState<number>(0);

  const close = useCallback(() => setOpenName(''), [setOpenName]);
  const open = useCallback(
    (value: React.SetStateAction<string>) => {
      setOpenName(value);
    },
    [setOpenName],
  );
  const openPage = useCallback(
    (value: React.SetStateAction<number>) => {
      setOpenPage(value);
    },
    [setOpenPage],
  );

  const value = useMemo(
    () => ({
      openName,
      close,
      open,
      setOpenId,
      openId,
      openPage,
      page
    }),
    [openName, close, open, setOpenId, openId, openPage, page],
  );
  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

Modal.Open = Open;
Modal.Window = Window;

export default Modal;

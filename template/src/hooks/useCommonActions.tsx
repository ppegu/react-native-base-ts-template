import { useToast as useDefaultToast } from 'native-base';

export const useToast = () => {
  const toast = useDefaultToast();

  const toastError = (title: string) => {
    toast.show({
      placement: 'top',
      title,
      status: 'error',
    });
  };

  const toastSuccess = (title: string) => {
    toast.show({
      placement: 'top',
      title,
      status: 'success',
    });
  };

  const toastWarning = (title: string) => {
    toast.show({
      placement: 'top',
      title,
      status: 'warning',
    });
  };

  const toastInfo = (title: string) => {
    toast.show({
      placement: 'top',
      title,
      status: 'info',
    });
  };

  return { toastError, toastSuccess, toastWarning, toastInfo };
};

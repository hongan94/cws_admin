import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const toastSuccess = (messages) => {
  toast.success(messages, {theme: 'colored'})
}
export const toastError = (messages) => {
  toast.error(messages, {theme: 'colored'})
}

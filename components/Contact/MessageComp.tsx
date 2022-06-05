type IMessageProps = {
  errors: { message: string };
  touched: { message: string };
  placeholder: string;
};

export const MessageComp = (props: IMessageProps) => (
  <textarea
    rows={4}
    className={`font-light rounded-md bg-gradient-to-r from-[#38bdf8] to-[#3b82f6]  border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500 ${
      props.errors.message &&
      props.touched.message &&
      'outline-none ring-2 border-none ring-red-600'
    }`}
    {...props}
  ></textarea>
);

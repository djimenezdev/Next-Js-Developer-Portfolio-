const MessageComp = (props) => (
  <textarea
    rows='4'
    type='text'
    className={`font-light rounded-md bg-gradient-to-r from-[#38bdf8] to-[#3b82f6]  border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500 ${
      props.errors.message &&
      props.touched.message &&
      'outline-none ring-2 border-none ring-red-600'
    }`}
    {...props}
  ></textarea>
);

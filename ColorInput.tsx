export const ColorInput = () => {
  const { hex, dispatch } = useContext(ColorToolContext);
  const input = useRef(null);

  const [show, setShow] = useState(true);

  useEffect(() => {
    input.current.value = '!';
    // input[type=color] is not supported
    if ('!' === input.current.value) {
      setShow(false);
    }
  }, []);

  const onChange = ({ target: { value } }) => {
    dispatch({ type: 'UPDATE_HEX', payload: value })
  };

  return show ? (
    <label>
      Color Picker:
      <input type="color" ref={input} value={hex} onChange={onChange} />
    </label>
  ) : null;
};

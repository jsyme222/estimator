import {Container} from '@material-ui/core';
import { useSelector } from 'react-redux';

const styles = {
  root: {
    maxWidth: 400,
    border: "1.2px solid #232323",
    borderRadius: 5,
  },
};

export default function Estimator(props) {
  const  total = useSelector((state) => state.total)

  return (
    <div style={styles.root}>
      <div style={styles.header}>
        <h3>{props.title || "Estimator"}</h3>
      </div>
      <Container>
        {props.children}
      </Container>
      <h4>Total: <b>{total}</b></h4>
    </div>
  );
}

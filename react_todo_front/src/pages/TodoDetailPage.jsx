import { useParams } from "react-router-dom";
import styles from "./pagelayout.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import TodoDetail from "../components/todo/TodoDetail";
const TodoDetailPage = () => {
  const params = useParams();
  const todoNo = params.todoNo;
  const [todo, setTodo] = useState(null);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKSERVER}/todos/${todoNo}`)
      .then((res) => {
        setTodo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className={styles.page}>
      <h3 className={styles.page_title}>TODO 상세보기</h3>
      {todo && <TodoDetail todo={todo} />}
    </div>
  );
};
export default TodoDetailPage;

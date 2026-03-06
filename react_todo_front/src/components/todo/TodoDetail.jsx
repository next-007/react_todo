import styles from "./TodoDetail.module.css";
const TodoDetail = ({ todo }) => {
  return (
    <div className={styles.detail}>
      <div className={styles.header}>
        <span className={todo.todoDone === 0 ? styles.badge1 : styles.badge2}>
          {todo.todoDone === 0 ? "진행중" : "완료"}
        </span>
        <span className={styles.number}>No. {todo.todoNo}</span>
      </div>

      <div className={styles.content}>
        <div className={styles.field}>
          <span className={styles.label}>작성자</span>
          <span className={styles.value}>{todo.todoWriter}</span>
        </div>
        <div className={styles.field}>
          <span className={styles.label}>내용</span>
          <p className={styles.text}>{todo.todoContent}</p>
        </div>
        <div className={styles.field}>
          <span className={styles.label}>작성일</span>
          <span className={styles.value}>{todo.todoDate}</span>
        </div>
      </div>

      <div className={styles.btns_wrap}>
        <button className={styles.btn}>
          {todo.todoDone ? "완료됨" : "완료 처리"}
        </button>
        <button className={styles.btn}>삭제</button>
      </div>
    </div>
  );
};
export default TodoDetail;

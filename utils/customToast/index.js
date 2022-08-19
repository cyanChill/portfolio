import toast from "react-hot-toast";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";

import style from "./index.module.css";

export const customToast = (type, message) => {
  toast.custom(
    (t) => {
      return (
        <div
          className={`${t.visible ? style.animateEnter : style.animateLeave} ${
            style.toastContainer
          }`}
        >
          <div className={style.msgContainer}>
            {(type === "success" || type === "error") &&
              (type === "success" ? (
                <AiFillCheckCircle
                  className={style.icon}
                  style={{ color: "hsl(var(--lime-400))" }}
                />
              ) : (
                <AiFillCloseCircle
                  className={style.icon}
                  style={{ color: "hsl(var(--red-500))" }}
                />
              ))}
            <p>{message}</p>
          </div>

          <button
            onClick={() => toast.dismiss(t.id)}
            className={style.closeBtn}
          >
            Close
          </button>
        </div>
      );
    },
    { duration: 5000 }
  );
};

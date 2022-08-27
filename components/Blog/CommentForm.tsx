import React, { useState } from "react";

import styles from "../../styles/CommentForm.module.css";
import StyledInput from "../FormElements/StyledInput";
import FormButton from "../FormElements/FormButton";

type CommentFormProp = {
  onSubmit: (name: string, email: string, comment: string) => Promise<boolean>;
};

const CommentForm = ({ onSubmit }: CommentFormProp) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    const success = await onSubmit(name, email, comment);
    if (success) {
      setName("");
      setEmail("");
      setComment("");
    }
    setIsSubmitting(false);
  };

  return (
    <div className={styles.container}>
      <h2>Post a comment</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <StyledInput
          type="textarea"
          placeholder="Comment"
          rows={3}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />

        <div className={styles.formGroup}>
          <StyledInput
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <StyledInput
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <FormButton
          type="submit"
          altBdr
          style={{
            "--btn-theme": "hsl(var(--black-700))",
            "--btn-alt-theme": "hsl(var(--off-white))",
          }}
        >
          <span>Submit Comment</span>
        </FormButton>
      </form>
    </div>
  );
};

export default CommentForm;

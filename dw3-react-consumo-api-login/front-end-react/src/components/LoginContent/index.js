import styles from "@/components/LoginContent/LoginContent.module.css";
import { useState } from "react";
import { useRouter } from "next/router";

const LoginContent = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    // Aqui irá a lógica do login
    router.push("/home");
  };

  return (
    <div className={styles.loginContent}>
      {/* LOGO */}
      <div className={styles.logo}>
        <img
          src="/images/thegames_logo.png"
          className={styles.logoImg}
          alt="The Games"
        />
      </div>
      {/* LOGIN CARD */}
      <div className={styles.loginCard}>
        {/* LOGIN CARD HEADER */}
        <div className={styles.loginCardHeader}>
          <h3>Faça seu login:</h3>
        </div>
        {/* LOGIN CARD BODY */}
        <div className={styles.loginCardBody}>
          <form className="formPrimary" onSubmit={handleLogin}>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Digite seu e-mail"
              className={`${styles.input} ${"inputPrimary"}`}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Digite sua senha"
              className={`${styles.input} ${"inputPrimary"}`}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <button type="submit" className={`${styles.input} ${"btnPrimary"}`}>
              Entrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginContent;

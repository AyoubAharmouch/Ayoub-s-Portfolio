import styles from './MessageStyles.module.css'

export default function Message() {
  return (
    <>
<div className={styles.login}>
  <h2>Login</h2>
  <form>
    <div className={styles.user}>

      <input type="text" name="" required="" />
      <label>Username</label>
    </div>
    <div className={styles.user}>
      <input type="password" name="" required="" />
      <label>Password</label>
    </div>
  </form>
</div>
    </>
  )
}

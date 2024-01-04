/*
  Ви маєте форму реєстрації користувачів.
  Іноді потрібно попередньо заповнити форму даними користувача для оновлення його профілю.
  Однак вам не завжди потрібно заповнити всі поля. Наприклад, користувач може хотіти оновити лише свій email та пароль,
  залишивши ім'я та прізвище без змін.

  Виправте тип у аргументі функції так, щоб не було помилок типу.
*/
function createOrUpdateUser(initialValues, key, updatedValue) {
    return {
        ...initialValues,
        [key]: updatedValue,
    };
}
const updatedUser = createOrUpdateUser({ email: "user@mail.com", password: "password123", name: "John", surname: "Doe" }, "email", "newuser@mail.com");
export {};
//# sourceMappingURL=6.js.map
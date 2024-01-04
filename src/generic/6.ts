/*
  Ви маєте форму реєстрації користувачів. 
  Іноді потрібно попередньо заповнити форму даними користувача для оновлення його профілю. 
  Однак вам не завжди потрібно заповнити всі поля. Наприклад, користувач може хотіти оновити лише свій email та пароль, 
  залишивши ім'я та прізвище без змін.

  Виправте тип у аргументі функції так, щоб не було помилок типу.
*/

type User = {
	name: string;
	surname: string;
	email: string;
	password: string;
};

function createOrUpdateUser<T extends User, U extends keyof T>(initialValues: T, key: U, updatedValue: T[U]): T {
	return {
		...initialValues,
		[key]: updatedValue,
	};
}

const updatedUser = createOrUpdateUser(
	{ email: "user@mail.com", password: "password123", name: "John", surname: "Doe" },
	"email",
	"newuser@mail.com",
);

export {};

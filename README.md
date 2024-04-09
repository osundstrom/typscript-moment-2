TypeScript - Moment 2

I denna uppgift skapas en hemsida med en todo lista. Man lägger till saker i listan via ett formulär på hemsidan. 
I formuläret fyller man i (tasken) samt (priority) allt det som ska göras amt prioriteringen. 

När man lagt till något finns det en knapp för klar, cid klick på den så stryks tasken över och en knapp för att 
radera den från listan kommer upp. 

i TypeScript är det gjort en klass (todoList) som innehåller, en array. Det finns flera metoder i klassen bland annat addTodo 
för lägga till en ny todo med parameterarna (task) och (priority). Den kontrolerar även att man matat in giltiga värden.
exempelvis att task ionte är tom eller att priority har ett värde mellan 1-3 (hög, mellan, låg). Det finns även markTodoCompleted
som används för att veta vilken todo i listan som man gjort färdigt. Sen används även getTodos för att hämta all todos i listan, 
saveToLocalStorage för att spara listan och loadFromLocalStorage för att hämta dem från localstorage. 

Utöver de som finns i klass (todoList) skapas ett flertal funktioner. displayTodos används för att hämta alla todos i listan
varje gång sidan laddas, den loopar igenom hela listan och skapar alla element som behövs samt lägger till dem så de visas på sidan.
Den kontrollerar även vad som visas om man trycker på klar, att radera knappen då dyker upp, att texten bli överstruken. 

Det finns flewra andra händelser vid olika tryck på knappar (deleteButton) denna rensar hela listan vid klick. Sen finns också 
(addTodoButton) som vid klick får värden från inputsen, här skrivs priority ut till hög,mellan eller låg beorde på om den 
tilldelats 1,2,3. Detta görs via en switch sats med 3 olika case. Kallar addTodo med informationen från inputsen/switchsatsen
samt uppdaerar sidan om den läggs till. 




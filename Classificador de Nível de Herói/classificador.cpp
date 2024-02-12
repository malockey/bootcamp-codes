#include <iostream>

int main() {
    std::string nome;
    float exp;
    char keyPressed;

    do {
    std::cout << "Digite aqui o nome do seu heroi:\n ";
    std::cin >> nome;

    std::cout << "\nQuanto de exp seu heroi possui?\n"; 
    std::cin >> exp;

    if (exp < 1000)
    {
        std::cout << "O heroi: " << nome << ", atualmente esta no nivel: Ferro\n";
    }
    else if (exp > 1000 && exp <= 2000)
    {
    std::cout << "O heroi: " << nome << ", atualmente esta no nivel: Bronze\n";
    }
    else if (exp > 2000 && exp <= 5000)
    {
    std::cout << "O heroi: " << nome << ", atualmente esta no nivel: Prata\n";
    }
    else if (exp > 5000 && exp <= 7000)
    {
    std::cout << "O heroi: " << nome << ", atualmente esta no nivel: Ouro\n";
    }
    else if (exp > 7000 && exp <= 8000)
    {
    std::cout << "O heroi: " << nome << ", atualmente esta no nivel: Platina\n";
    }
    else if (exp > 8000 && exp <= 9000)
    {
    std::cout << "O heroi: " << nome << ", atualmente esta no nivel: Ascendente\n";
    }
    else if (exp > 9000 && exp <= 10000)
    {
    std::cout << "O heroi: " << nome << ", atualmente esta no nivel: Imortal\n";
    }
    else
    {
    std::cout << "O heroi: " << nome << ", atualmente esta no nivel: Radiante\n";
    }

    std::cout << "\nGostaria de repetir? (pressione 'y' para sim, 'n' para nao)\n";
    std::cin >> keyPressed;
    system("cls");
    } while (keyPressed == 'y');
    
    return 0;
}
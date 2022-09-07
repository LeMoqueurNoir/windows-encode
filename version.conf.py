import time
import os
import tkinter as tk

print("hello, you've been hacked !")

def create_new_window():
    window = tk.Tk()
    window.title("Your computer is infected")
    window.geometry("400x300")
    label = tk.Label(window, text="❌ A virus was detected on your device ❌", font=("Arial", 15))
    label.pack()
    window.protocol("WM_DELETE_WINDOW", create_new_window)
    window.mainloop()

create_new_window()
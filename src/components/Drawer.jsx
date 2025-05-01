"use client";

import { useState } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import InputLabel from "../common/InputLabel";
import Textarea from "../common/Textarea";
import { useAuth } from "./AuthContext";
import {
  collection,
  query,
  where,
  onSnapshot,
  orderBy,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase-config";

export default function Drawer({ message, messages }) {
  const { isOpen, toggleOpen } = useAuth();
  const [notification, setNotification] = useState(message);
  // const [open, setOpen] = useState(flip);

  const closeDialog = () => {
    markAsRead(notification.id);
    toggleOpen();
  };

  const getMessageindex = () => {
    return messages.findIndex((m) => m.id === notification.id);
  };

  const next = () => {
    const nextIndx = getMessageindex() + 1;

    if (nextIndx <= messages.length) {
      const nextNotification = messages[nextIndx];
      setNotification(nextNotification);
      markAsRead(notification.id);
    }
  };

  const prev = () => {
    const currentIndx = getMessageindex();
    const prevIndx = currentIndx > 0 ? currentIndx - 1 : currentIndx;
    console.log(prevIndx);
    if (prevIndx >= 0) {
      const nextNotification = messages[prevIndx];
      setNotification(nextNotification);
      markAsRead(notification.id);
    }
  };

  const markAsRead = async (messageId) => {
    try {
      const messageRef = doc(db, "updates", messageId);
      await updateDoc(messageRef, { read: true });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Dialog open={isOpen} onClose={() => closeDialog} className="relative z-10">
      <div className="fixed inset-0" />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel
              open
              className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
            >
              <div className="flex h-3/5 flex-col divide-y divide-gray-200 bg-white shadow-xl">
                <div className="flex min-h-0 flex-1 flex-col overflow-y-scroll py-6">
                  <div className="px-4 sm:px-6">
                    <div className="flex items-start justify-between">
                      <DialogTitle className="text-base font-semibold text-indigo-600">
                        Message Center
                      </DialogTitle>
                      <div className="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          onClick={closeDialog}
                          className="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                          <span className="absolute -inset-2.5" />
                          <span className="sr-only">Close panel</span>
                          <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="relative mt-6 flex-1 px-4 sm:px-6">
                    <form>
                      <InputLabel
                        name="date"
                        label="Date"
                        value={notification.timestamp.toDate().toLocaleString()}
                      />
                      <InputLabel
                        name="title"
                        label="Title"
                        value={notification.message}
                      />
                      <Textarea
                        name="message"
                        label="Message"
                        value={notification.details}
                      />
                    </form>
                  </div>
                </div>
                <div className="flex shrink-0 justify-end px-4 py-4">
                  <button
                    type="button"
                    onClick={prev}
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-indigo-500"
                    disabled={getMessageindex() === 0 ? true : false}
                  >
                    Prev
                  </button>
                  <button
                    type="submit"
                    className="ml-4 inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    disabled={
                      getMessageindex() + 1 === messages.length ? true : false
                    }
                    onClick={next}
                  >
                    Next
                  </button>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
}

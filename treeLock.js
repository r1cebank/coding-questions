class TreeNode {
    constructor(value, left, right, parent) {
        this.parent = parent;
        this.value = value;
        this.left = left;
        this.right = right;
        this.locked = false;
    }
    is_locked() {
        return this.locked;
    }
    notlocked_parent() {
        const parent = this.parent;
        while(parent) {
            if (!this.parent.is_locked()) {
                parent = parent.parent;
            } else {
                return false;
            }
        }
        return true;
    }
    notlocked_child() {
        if (!this.left && this.right) {
            return !this.locked() && this.right.lockable();
        } else if (!this.right && this.left) {
            return !this.locked() && this.left.lockable();
        } else {
            return !this.locked();
        }
        return !this.locked() && (this.left.notlocked_child() && this.right.notlocked_child());
    }
    toggle(isLock) {
        if (this.left && this.right) {
            if (this.left.notlocked_child() && this.right.notlocked_child() && !this.notlocked_parent()) {
                this.is_locked = isLock && true;
                return true;
            }
            return false;
        } else {
            if (!this.left && this.right) {
                if (this.right.notlocked_child() && !this.notlocked_parent()) {
                    this.is_locked = isLock && true;
                    return true;
                }
                return false;
            } else if (!this.right && this.left) {
                if (this.left.notlocked_child() && !this.notlocked_parent()) {
                    this.is_locked = isLock && true;
                    return true;
                }
                return false;
            } else {
                this.is_locked = isLock && true;
                return true;
            }
        }
    }
    lock() {
        return this.toggle(true);
    }
    unlock() {
        return this.toggle(false);
    }
}

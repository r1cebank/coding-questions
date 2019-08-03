#include <iostream>
#include <string>

using namespace std;

class Solution {
public:
    string convert(string s, int numRows) {
		if (numRows == 1) {
			return s;
		}
		int size = s.size();
		int zigZagSize = numRows * 2 - 2;
		string res;
		bool goDown = true;
		for (int row = 0; row < numRows; row++) {
			for(int i = row, j = zigZagSize - row; i < size;) {
				res.append(1, s[i]);
				i += zigZagSize;
				if (row > 0 && row < numRows - 1 && j < size) {
					res.append(1, s[j]);
					j += zigZagSize;
				}
			}
		}
        return res;
    }
};

int main(int argc, char **argv)
{
	Solution solution;
	string input = "PAYPALISHIRING";
	string result = solution.convert(input, 3);
	cout << result;
	return 0;
}

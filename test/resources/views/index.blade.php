<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>test</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
  <script
  src="https://code.jquery.com/jquery-3.4.1.js" integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU=" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
  <script src="{{ asset('js/script.js') }}"></script>
</head>
<body style="background-color: #eee;">
	<div class="mx-auto" style="width: 1100px;">
		<form id="testForm" class="mt-5 p-2 bg-white shadow clearfix" method="POST" action="{{ route('test.create') }}">
			{{ csrf_field() }}

			<div class="w-50 p-2 float-left">
				<div class="form-group">
					<label for="familyName">姓</label>
					<input type="text" class="form-control" id="familyName" name="familyName" placeholder="姓">
				</div>			
			</div>

			<div class="w-50 p-2 float-left">
				<div class="form-group">
					<label for="firstName">名</label>
					<input type="text" class="form-control" id="firstName" name="firstName" placeholder="名">
				</div>			
			</div>

			<div class="w-100 p-2 float-left">
				<div class="form-group">
					<label for="e-mail">Eメールアドレス</label>
					<input type="email" class="form-control" id="e-mail" name="e-mail" placeholder="Eメールアドレス">
				</div>
			</div>

			<div class="w-50 p-2 float-left clearfix">
				<label class="w-100">性別</label>
				<div class="checkbox float-left">
					<label>
						<input type="radio" name="sex" id="male" value="男性" checked>
						男性
					</label>
				</div>
				<div class="checkbox float-left ml-2">
					<label>
						<input type="radio" name="sex" id="female" value="女性">
						女性
					</label>
				</div>
			</div>

			<div class="w-50 p-2 float-left">
				<div class="form-group w-50">
					<label for="age">年齢</label>
					<select class="form-control" id="age" name="age">
						<option value=""></option>
						<option value="10">~19</option>
						<option value="20">20~29</option>
						<option value="30">30~39</option>
						<option value="40">40~49</option>
						<option value="50">50~59</option>
						<option value="60">60~</option>
					</select>
				</div>		
			</div>

			<div class="w-100 p-2 float-left">
				<div class="form-group">
					<label for="note">備考</label>
					<textarea class="form-control" id="note" name="note" rows="3"></textarea>
				</div>
			</div>

			<div class="w-100 float-left">
				<div class="w-75 p-4 mx-auto row" style="border-top: 1px solid #ced4da">
					<button type="button" id="submit-btn" class="mx-auto btn btn-primary" style="width: 100px;">送信</button>
					<button type="reset" id="clear-btn" class="mx-auto btn btn-secondary" style="width: 100px;">クリア</button>
					<button type="button" id="temp-btn" class="mx-auto btn btn-success" style="width: 100px;">テンプレ</button>
					<button type="button" id="disabled-btn" class="mx-auto btn btn-danger" style="width: 100px;">操作不能</button>
				</div>
			</div>
			
		</form>

		<ul id="testList" class="list-unstyled mt-5"></ul>
	</div>	
</body>
</html>